import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ButtonGroup, Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Select } from '@/components/Select'

export type PaginationProps = {
  totalPages: number
  maxDisplay?: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({
  totalPages = 4,
  maxDisplay = 6,
  currentPage = 1,
  setCurrentPage,
}: PaginationProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const [showMobile, setShowMobile] = useState(true)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      {totalPages < maxDisplay + 1 && !showMobile ? (
        <ButtonGroup justify="center">
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={handlePrev}
            isDisabled={currentPage === 1}
            aria-label="Previous page">
            <Icon
              name="ChevronLeft"
              size="md"
            />
          </Button>
          {pageNumbers.map((page) => (
            <Button
              key={page}
              label={String(page)}
              size="md"
              variant={page === currentPage ? 'primary' : 'text'}
              hasIcon
              onClick={() => setCurrentPage(page)}
            />
          ))}
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
            aria-label="Next page">
            <Icon
              name="ChevronRight"
              size="md"
            />
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup justify="center">
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={handlePrev}
            isDisabled={currentPage === 1}
            aria-label="Previous page">
            <Icon
              name="ChevronLeft"
              size="md"
            />
          </Button>
          <Select
            name="pageSize"
            value={String(currentPage)}
            size="sm"
            options={pageNumbers.map((page) => ({
              value: String(page),
              label: String(page),
            }))}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          />
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
            aria-label="Next page">
            <Icon
              name="ChevronRight"
              size="md"
            />
          </Button>
        </ButtonGroup>
      )}
    </>
  )
}
