import { CloudServerOutlined } from "@ant-design/icons"

const CloudCopyLink = (link) => {

    return (
        <div>
            <a href={link.link} target="blank">
                <CloudServerOutlined style={{ color: 'blue', fontSize: '14px' }} />
            </a>
        </div>
    )
}

export default CloudCopyLink