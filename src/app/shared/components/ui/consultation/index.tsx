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
        <div className="p-4 bg-white shadow rounded-lg">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
            onClick={onNew}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
            Novo
            </button>
        </div>
        <table className="w-full table-auto">
            <thead>
            <tr>
                {columns.map((col) => (
                <th key={String(col.accessor)} className="border px-4 py-2 text-left">
                    {col.header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                    {columns.map((col) => (
                    <td key={String(col.accessor)} className="border px-4 py-2">
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