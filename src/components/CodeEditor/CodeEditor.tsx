'use client'

import Editor, { OnMount } from '@monaco-editor/react'
import clsx from 'clsx'
import type { editor as MonacoEditor } from 'monaco-editor'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'

import styles from './code-editor.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Toast } from '@/components/Toast'

export interface CodeEditorProps {
  language?: 'javascript' | 'typescript' | 'json' | 'php' | 'css' | 'scss'
  height?: number | string
  minHeight?: number | string
  maxHeight?: number | string
  theme?: 'dark' | 'light'
  data?: string
  autoResize?: boolean
}

export const CodeEditor = ({
  language = 'javascript',
  height = 420,
  minHeight = 188,
  maxHeight = 620,
  theme,
  data = '',
  autoResize = false,
}: CodeEditorProps) => {
  const [value, setValue] = useState<string>(data)
  const [editorHeight, setEditorHeight] = useState<number | string>(height)
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null)
  const editorTheme = theme ?? 'light'

  const handleEditorMount: OnMount = (editorInstance) => {
    editorRef.current = editorInstance
    if (autoResize) {
      updateEditorHeight()
      editorInstance.onDidChangeModelContent(() => {
        updateEditorHeight()
      })
    }
  }

  const updateEditorHeight = () => {
    if (!editorRef.current) return
    const lineCount = editorRef.current.getModel()?.getLineCount() ?? 1
    const lineHeight = 28
    let newHeight = lineCount * lineHeight + 20

    if (maxHeight) {
      const max = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight)
      newHeight = Math.min(newHeight, max)
    }

    if (minHeight) {
      const min = typeof minHeight === 'number' ? minHeight : parseInt(minHeight)
      newHeight = Math.max(newHeight, min)
    }

    setEditorHeight(newHeight)
    editorRef.current.layout()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editorRef.current?.getValue() ?? data)
      toast('Copied to clickboard', { toastId: 'copy' })
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className={clsx(styles.editor, styles[editorTheme])}>
      <Button
        size="sm"
        variant="default"
        onClick={handleCopy}
        outline
        hasIcon
        className={styles.button}>
        <Icon
          name="Copy"
          size="sm"
        />
      </Button>
      <Editor
        height={autoResize ? editorHeight : height}
        defaultLanguage={language}
        theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
        value={value}
        onChange={(v) => setValue(v || '')}
        onMount={handleEditorMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          scrollbar: { vertical: 'auto' },
          overviewRulerLanes: 0,
          overviewRulerBorder: false,
          renderLineHighlight: 'none',
          renderLineHighlightOnlyWhenFocus: false,
          selectionHighlight: false,
          occurrencesHighlight: 'off',
          matchBrackets: 'never',
          cursorStyle: 'line',
          cursorBlinking: 'solid',
          hideCursorInOverviewRuler: true,
        }}
      />
      <Toast limit={1} />
    </div>
  )
}
