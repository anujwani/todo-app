const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
}

export const SelectedProject = ({project, onDelete}) => {
    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button className="text-stone-600 hover:text-stone-900" onClick={()=>onDelete(project.id)}>DELETE</button>
            </div>
            <p className="mb-4 text-stone-400">{formatDate(project.dueDate)}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
    </div>
}