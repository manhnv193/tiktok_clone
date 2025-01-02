import { useState } from "react";

const courses = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Angular' },
  { id: 3, name: 'Vue' },
  { id: 4, name: 'Svelte' },
  { id: 5, name: 'Ember' }
]


function App() {

  const [checked, setChecked] = useState([])


  const handleSubmit = () => {
    console.log({ids: checked})
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }


  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
