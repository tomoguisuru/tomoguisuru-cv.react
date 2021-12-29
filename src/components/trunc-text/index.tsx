interface IParams {
    text: string;
    max: number;
}

export default function TruncText({ text, max }: IParams) {
    let str = text;

    if (str.length > max) {
        str = text.substring(0, max) + '...';
    }

    return (
        <>
            {str}
        </>
    )
}