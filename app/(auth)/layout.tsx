import {ReactNode} from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout flex min-h-screen w-full items-center justify-center px-4 py-8">
      {children}
    </div>
  )
}

export default AuthLayout