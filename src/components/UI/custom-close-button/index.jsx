import { CloseOutlined } from "@ant-design/icons"

const CustomCloseButton = ({ onClick }) => {
    return (
        <button
            className='custom-close-button'
            onClick={onClick}>
            <CloseOutlined style={{ color: 'blue', fontSize: '10px' }} />
        </button>
    )
}

export default CustomCloseButton