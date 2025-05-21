import { FaYoutube } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default (props) => {


    function getFormattedDate(pubDate) {
        const datePart = pubDate.split(' ')[0];
        const [year, month, day] = datePart.split('-');
        return `${day}/${month}/${year}`;
    }



    return (
        <>
            {props.posts.map((post) => {
                let formattedDate = getFormattedDate(post.pubDate);

                return (
                    <div
                        key={post.id}
                        className="w-[60%] md:w-[30%] h-[450px] bg-[#111827] m-3 rounded-bl-4xl rounded-tr-4xl text-center p-7 flex flex-col justify-start items-center max-w-[1040px] shadow-xl/30"
                    >
                        {post.url.includes("youtube") ? (
                            <FaYoutube color="white" size={100} />
                        ) : (
                            <IoDocumentText color="white" size={100} />
                        )}

                        <button
                            className="text-white font-body pt-5 font-semibold underline"
                            onClick={() => window.open(`https://api.devall.com.br/api/v2/post/${post.id}/click`, "_blank")}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = "none")}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = "underline")}
                        >
                            {post.title}
                        </button>

                        <p className="pt-5 text-center font-body text-sm font-medium">
                            <span className="text-[#14B605]">{post.site.name}</span>
                            <span className="text-white"> - em {formattedDate}</span>
                        </p>

                        <div className="mt-5 overflow-y-auto max-h-[120px] text-white text-sm font-body scrollbar-thin scrollbar-thumb-[#14B605] pr-2 text-center w-full">
                            {post.summary}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
