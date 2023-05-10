import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/SearchDIoCSS.css';

function Search(){
    return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <header>
                            <h1>Reagujte brzo!</h1>
                        </header>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Pretražite po simptomima"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">Pretraži</button>
                                    </div>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default Search;
