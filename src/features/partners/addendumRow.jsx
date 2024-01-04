import { dateFormatter } from "../../app/utils/date-formatter"
import CloudCopyLink from "../../components/UI/cloud-copy-link"
import HaveOriginal from "../../components/UI/have-original"
import OtherDocsRow from "./otherDocsRow"

const AddendumRow = (props) => {

    const addendum = props.addendums

    const otherDocs = addendum.createdOtherAddendumDocs

    return (
        <div className='addendum-row'>
            <div className='addendum-row--card'>
                <div className='addendum-row--title'>
                    <h4>ДС № {addendum.addendumNumber} от {dateFormatter(addendum.addendumDate)}</h4>
                    <h3>{addendum.place.name}</h3>
                </div>
                <div className='addendum-row--info'>
                    <HaveOriginal original={addendum.original} />
                    <CloudCopyLink link={addendum.cloudCopy} />
                </div>
                <div className='addendum-row--numbers'></div>
            </div>
            {
                otherDocs?.map(i =>
                    <OtherDocsRow key={i.id} otherDoc={i} />
                )
            }
        </div>
    )
}

export default AddendumRow