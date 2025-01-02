'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

type Props = { children?: React.ReactNode }

const ProgressProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#ed7226" options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default ProgressProvider
