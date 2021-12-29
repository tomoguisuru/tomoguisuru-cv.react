export default function AboutIndex({ text }: { text: string[] }) {
    return (
        <>
            {text.map((t, i) => (<p key={i}>{t}</p>))}
        </>
    );
}