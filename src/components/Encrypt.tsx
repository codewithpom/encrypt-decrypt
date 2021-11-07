import { useState, useEffect } from "react"
import Cryptr from "cryptr";

export default function Encrypt() {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [encrypted, setEncrypted] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (loading) {
            const cryptr = new Cryptr(key);
            const encrypted = cryptr.encrypt(text);
            setEncrypted(encrypted)
            setLoading(false);
        }
    }, [loading, key, text]);


    function encrypt() {
        try {
            setLoading(true);

        } catch (error) {
            console.log(error);
            return "";
        }

    }



    return (
        <div className="container">
            <br />
            <div className="text-center">
                <h1>Encrypt</h1>
            </div>

            <br />
            <br />

            <form>
                <div className="form-group">
                    <label htmlFor="key" className="h5">Key: </label>
                    <input type="text" className="form-control" id="key" placeholder="Enter key" value={key} onChange={(e) => setKey(e.target.value)} />
                </div>
                <br />

                <div className="form-group">
                    <div className="text-center">
                        <label htmlFor="text" className="h3">Text to Encrypt</label>
                    </div>

                    <textarea className="form-control" id="text" rows={10} value={text} title="Text to Encrypt" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => encrypt()}>Encrypt</button>

            </form>
            <br />
            <div className="text-center">
                <label htmlFor="encryptedText" className="h3">Encrypted Text</label>
            </div>

            {
                loading ?
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> :
                    <textarea className="form-control" id="encryptedText" rows={10} value={encrypted} title="Encrypted Text" disabled></textarea>

            }





            <br />
            <br />
        </div>
    )
}
