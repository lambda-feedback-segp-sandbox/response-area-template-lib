import { Delete, BarChart, ContentCopy, Tune } from '@mui/icons-material'
import Button from '@mui/material/Button'
import type React from 'react'

export enum ActionButton {
  Configure = 'Configure',
  Explore = 'Explore',
  Duplicate = 'Duplicate',
  Delete = 'Delete',
}

export interface ActionButtonsProps {
  disabled?: boolean
  exploreDisabled?: boolean
  handleButtonClick?: (button: ActionButton) => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  disabled,
  exploreDisabled,
  handleButtonClick,
}) => (
  <>
    <Button
      variant="outlined"
      endIcon={<Tune />}
      onClick={() => handleButtonClick?.(ActionButton.Configure)}
      sx={commonButtonStyles}
      disabled={disabled}>
      Configure
    </Button>
    <Button
      variant="outlined"
      endIcon={<BarChart />}
      onClick={() => handleButtonClick?.(ActionButton.Explore)}
      sx={commonButtonStyles}
      disabled={disabled || exploreDisabled}>
      Explore
    </Button>
    <Button
      variant="outlined"
      endIcon={<ContentCopy />}
      onClick={() => handleButtonClick?.(ActionButton.Duplicate)}
      sx={commonButtonStyles}
      disabled={disabled}>
      Duplicate
    </Button>
    <Button
      color="error"
      variant="outlined"
      endIcon={<Delete />}
      onClick={() => handleButtonClick?.(ActionButton.Delete)}
      sx={{
        ...commonButtonStyles,
        width: '100%',
      }}
      disabled={disabled}>
      Delete
    </Button>
    <Button />
  </>
)

const commonButtonStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
