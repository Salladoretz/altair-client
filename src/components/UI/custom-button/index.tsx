type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};


const CustomButton = ({
    children,
    onClick
}: Props) => {
    return (
        <button
            className='customButton'
            onClick={onClick}
        >{children}</button>
    )
}

export default CustomButton