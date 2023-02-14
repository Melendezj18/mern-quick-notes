export default function NoteListPage(){
    return(
        <div>
            <h1>Note List</h1>
            <h2>No Notes Yet</h2>
            <input>
                type='text'
                name='note'
                value={credentials.note}
                required
            </input> <button type='submit'>New Note</button>
        </div>
    )
}