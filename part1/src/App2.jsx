const App2 = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}

        {/* use this instead */}
        {notes.map(note => <li>{note.content}</li>)}

<li> </li>
{/* this is for readability */}
{notes.map(note => 
          <li>
            {note.content}
          </li>
        )}

        <li> </li>
         {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>       
        )}
      </ul>
    </div>

  )
}


export default App2