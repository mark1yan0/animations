const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      {children}
    </div>
  )
}

export default Container
