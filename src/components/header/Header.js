import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigateTo = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    navigateTo('/exams/register')
  }

  return (
    <header>
      <h1>REPO PROVAS</h1>
      <button onClick={handleClick}>Publique uma nova prova</button>
    </header>
  )
}

export default Header
