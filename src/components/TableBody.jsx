import { HiCheckCircle, HiMiniExclamationTriangle } from "react-icons/hi2";

export default function TableBody() {
    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td className="text-success text-2xl"><HiCheckCircle /></td>
                <td>Organizar la habitación personal</td>
                <td>Occaecat proident ipsum cupidatat officia tempor sit proident cupidatat do laboris.</td>
            </tr>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td className="text-warning text-2xl"><HiMiniExclamationTriangle /></td>
                <td>Organizar la habitación personal</td>
                <td>Occaecat proident ipsum cupidatat officia tempor sit proident cupidatat do laboris.</td>
            </tr>
        </tbody>
    )
}