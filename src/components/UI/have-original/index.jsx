import { FileDoneOutlined, FileExcelOutlined } from "@ant-design/icons"


const HaveOriginal = ({ original }) => {

    return (
        <div>
            {original
                ? <FileDoneOutlined style={{ color: 'limegreen', fontSize: '14px' }} />
                : <FileExcelOutlined style={{ color: 'red', fontSize: '14px' }} />
            }
        </div>
    )
}

export default HaveOriginal