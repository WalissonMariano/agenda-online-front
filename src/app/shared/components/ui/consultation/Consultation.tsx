import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

interface Column<T> {
    header: string;
    accessor: keyof T;
}

interface DataConsultation<T> {
    title: string;
    columns: Column<T>[];
    data: T[];
    onNew: () => void;
}

export const Consultation = <T,>({title, columns, data, onNew}: DataConsultation<T>) => {
    
    return (
        <div className="p-4 bg-white shadow rounded-lg" style={{ minHeight: '90vh' }}>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-600">{title}</h2>
            <button
            onClick={onNew}
            className="bg-amber-400 hover:bg-amber-300 text-gray-600 px-3 py-1 text-sm font-bold rounded"
            >
            Novo
            </button>
        </div>
        <table className="bg-white w-full table-auto text-sm border-none">
            <thead className="bg-amber-400">
            <tr className="border-b-1 border-gray-400 text-gray-600">
                <th className="px-4 py-2">
                </th>
                {columns.map((col) => (
                <th key={String(col.accessor)} className="px-4 py-2 text-left">
                    {col.header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100 border-b-1 border-gray-400">
                    <td className="px-4 py-2 max-w-12">
                        <button className="mr-1 bg-amber-400 hover:bg-blue-200 text-gray-600 text-sm p-2 border rounded-sm border-none">
                            <AiFillEdit />
                        </button>
                        <button className="mr-0 bg-red-400 hover:bg-red-200 text-gray-600 text-sm p-2 border rounded-sm border-none">
                            <AiFillDelete />
                        </button>
                    </td>
                    {columns.map((col) => (
                    <td key={String(col.accessor)} className="px-4 py-2">
                        {String(item[col.accessor])}
                    </td>
                    ))}
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={columns.length} className="text-center py-4">
                    Nenhum dado encontrado.
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    )
}