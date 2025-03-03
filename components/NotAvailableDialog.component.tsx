import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import type React from 'react'

export interface NotAvailableDialogProps {
  featureName: string
  handleClose: () => void
  open: boolean
}

export const NotAvailableDialog: React.FC<NotAvailableDialogProps> = ({
  featureName,
  handleClose,
  open,
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">Not Available</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {featureName} is not available in the Response Area Sandbox.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)
