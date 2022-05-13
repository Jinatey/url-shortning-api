



const FirstSection = () => {
  return (

    <div className='container'>
    <header className='header'>
      <p>Shortly</p>
      <a href='#'>Featured</a>
      <a href='#'>Pricing</a>
      <a href='#'>Resourses</a>
      <a href='#' className='login'>
        Login
      </a>
      <a href='#'>Sign up</a>
    </header>

    <main className='first'>
      <div className='first-texts'>
        <h1>More than just shorter links</h1>
        <p>
          Build uour brand's recognition and get detailed insights on how
          your links are performing
        </p>
        <a href='#'>Get Started</a>
      </div>

      <img className='first-pic' src='/ill-working.svg' alt='' />
    </main>
  </div>)
} 

export default FirstSection