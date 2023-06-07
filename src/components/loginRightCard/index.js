export default function LoginRightCard({ HeadingText, ParagraphText }) {
    return (
        <div className="hidden sm:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-18th-hole bg-top bg-cover">
            <div className="px-4 py-6 text-slate-100 md:mx-6 md:p-12 bg-slate-900/50 rounded-3xl">
                <h4 className="mb-6 text-xl font-semibold">{HeadingText}</h4>
                <p className="text-sm">{ParagraphText}</p>
            </div>
        </div>
    );
}
