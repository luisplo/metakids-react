import { HiMiniPlus, HiMiniTrash  } from "react-icons/hi2";
import Table from "../components/Table";

export default function Activity() {
    return (
        <>
            <h1 className="text-4xl text-left font-semibold">Actividades</h1>
            <p className="mt-5 mb-10">
                Cillum officia cupidatat culpa labore sint Lorem eu id. Sit anim officia exercitation non anim consequat. Eiusmod voluptate anim commodo eiusmod pariatur aliquip voluptate voluptate ea sunt incididunt non Lorem exercitation.
            </p>
            <div className="flex justify-end gap-2 my-2">
                <button className="btn btn-primary"><HiMiniPlus />Añadir</button>
                <button className="btn btn-secondary"><HiMiniTrash  />Eliminar</button>
            </div>
            <Table />
        </>
    )
}