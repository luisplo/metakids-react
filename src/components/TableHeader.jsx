export default function TableHeader() {
    return (
        <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th>Completada</th>
                <th>Nombre</th>
                <th>Descripción</th>
            </tr>
        </thead>
    )
}