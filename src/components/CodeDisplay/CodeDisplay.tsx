import Editor, { OnMount } from '@monaco-editor/react'
import clsx from 'clsx'
import type { editor as MonacoEditor } from 'monaco-editor'
import { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'

import styles from './code-display.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Toast } from '@/components/Toast'

export interface CodeDisplayProps {
  language?: 'javascript' | 'typescript' | 'json' | 'php' | 'css' | 'scss'
  theme?: 'dark' | 'light'
  data?: string
  hideLineNumbers?: boolean
}

export const CodeDisplay = ({
  language = 'javascript',
  theme,
  data = '',
  hideLineNumbers = false,
}: CodeDisplayProps) => {
  const [editorHeight, setEditorHeight] = useState(100)
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null)
  const editorTheme = theme ?? 'light'

  const handleEditorMount: OnMount = (editorInstance, monaco) => {
    editorRef.current = editorInstance
    updateEditorHeight()
  }

  const updateEditorHeight = () => {
    if (!editorRef.current) return
    const lineCount = editorRef.current.getModel()?.getLineCount() ?? 1
    const lineHeight = 28
    setEditorHeight(lineCount * lineHeight + 20)
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

  useEffect(() => {
    updateEditorHeight()
  }, [data])

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
        height={editorHeight}
        defaultLanguage={language}
        theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
        value={data}
        onMount={handleEditorMount}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingIndent: 'indent',
          lineNumbers: hideLineNumbers ? 'off' : 'on',
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
          colorDecorators: false,
        }}
      />
      <Toast limit={1} />
    </div>
  )
}
