import React from 'react'

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <header>
        <h1>Welcome to AI Writing Assistant</h1>
        <p>Your one-stop solution for all your writing needs. Use the navigation bar to explore different features.</p>
      </header>
    </div>
  )
}

export default Home