import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="*:w-full space-y-2">
                <button className="btn border-black"><FaGoogle className="text-[18px]"/> Login with Google</button>
                <button className="btn border-black"><FaGithub className="text-[18px]"/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;