import CloudCopyLink from "../../components/UI/cloud-copy-link"

const OtherDocsRow = (props) => {

    const info = props.otherDoc

    console.log(info)
    return (
        <div className='other-docs-row'>
            <div>{info?.otherDocType?.title}</div>
            <div>{info?.description}</div>
            <div><CloudCopyLink link={info?.cloudCopy} /></div>
        </div>
    )
}

export default OtherDocsRow