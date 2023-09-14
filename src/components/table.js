export default function Table({ fields, data = [], onClickRow }) {
    const getValue = (row, field) => {
        if (field.getValue) {
            return field.getValue(row);
        }

        return row[field.field]
    }


    return (<div className="w-full font-Eina03 table-auto overflow-hidden rounded-t-[6px]">
            <table className="w-full">
                <thead className="">
                    <tr className="bg-[#405D80] text-white text-[14px] font-bold p-[16px]">
                        {
                            fields.map((field, index) => {
                                return (
                                    <th className="p-[16px] text-left cursor-pointer" key={index}>{field.label}</th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, indexRow) => {
                            return (
                                <tr key={indexRow} onClick={() => onClickRow(item)} className="cursor-pointer">
                                    {
                                        fields.map((field, indexCol) => {
                                            return (<td key={indexRow+indexCol} className={`p-[16px] bg-white border-b text-[14px] ${field.class}`}>{getValue(item, field)}</td>);
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    {
                        data === null ? (
                            <tr>
                                <td colSpan={fields.length} className="text-center p-3 p-[16px] bg-white border-b text-[14px]">Loading ...</td>
                            </tr>
                        ) : <></>
                    }
                    {
                        data?.length === 0 ? (
                            <tr>
                                <td colSpan={fields.length} className="text-center p-3 p-[16px] bg-white border-b text-[14px]">Nothing found.</td>
                            </tr>
                        ) : <></>
                    }
                </tbody>
            </table>
        </div>);
}