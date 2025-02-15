import { useRef } from "react";
import { Input } from "./Input"
import { Modal } from "./Modal";

export const NewProject = ({ onSave }) => {
    const modal = useRef();

    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    const handleSave = () => {
        const entTitle = titleRef.current.value;
        const entDesc = descRef.current.value;
        const entDate = dateRef.current.value;

        if (!entTitle || entTitle === ''
            || !entDesc || entDesc === ''
            || !entDate || entDate === '') {
                modal.current.open();
                return;
        }

        onSave({
            title: entTitle,
            description: entDesc,
            dueDate: entDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonLabel="Close">
                <h2>Invalid Input</h2>
                <p>Oops... You forgot to enter a value</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </menu>
                <div>
                    <Input ref={titleRef} label="Title" type="text" />
                    <Input ref={descRef} label="Description" textarea />
                    <Input ref={dateRef} label="Due Date" type="date" />
                </div>
            </div>
        </>
    );
}