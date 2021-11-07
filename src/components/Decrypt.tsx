import { useState, useEffect } from "react"
import Cryptr from "cryptr";

export default function Decrypt() {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [decrypted, setDecrypted] = useState("");
    const [loading, setLoading] = useState(false);
    // add useEffect when the loading is true
    useEffect(() => {
        if (loading) {
            try {
                const cryptr = new Cryptr(key);
                const encrypted = cryptr.decrypt(text);
                setDecrypted(encrypted)
                setLoading(false);
            } catch (error) {
                setLoading(false);
                alert("Invalid key");
            }
        }
    }, [loading]);


    function decrypt() {

        setLoading(true);



    }



    return (
        <div className="container">
            <br />
            <div className="text-center">
                <h1>Decrypt</h1>
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
                        <label htmlFor="text" className="h3">Encrytped Text</label>
                    </div>

                    <textarea className="form-control" id="text" rows={10} value={text} title="Text to Encrypt" onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => decrypt()}>Decrypt</button>

            </form>
            <br />
            <div className="text-center">
                <label htmlFor="encryptedText" className="h3">Decrypted Text</label>
            </div>

            {
                loading ?
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> :
                    <textarea className="form-control" id="encryptedText" rows={10} value={decrypted} title="Decrypted Text" disabled></textarea>

            }





            <br />
            <br />
        </div>
    )
}
