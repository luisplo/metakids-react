import { HiMiniPlus, HiMiniTrash } from "react-icons/hi2";

export default function Action() {
    return (
        <div className="flex justify-end gap-2 my-2">
            <button className="btn btn-primary"><HiMiniPlus />Añadir</button>
            <button className="btn btn-secondary"><HiMiniTrash />Eliminar</button>
        </div>
    )
}