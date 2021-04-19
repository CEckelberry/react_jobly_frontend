import React, { useState } from "react";
import {Button, Input, InputGroupAddon, InputGroup} from "reactstrap";
import "./SearchForm.css";

function SearchForm({searchFor}){

    console.debug("SearchForm", "searchFor=", typeof searchFor);

    const [searchTerm, setSearchTerm] = useState("");
  
    /** Tell parent to filter */
    function handleSubmit(evt) {
      // take care of accidentally trying to search for just spaces
      //console.log(`subbmitted ${searchTerm}`)
      evt.preventDefault();
      searchFor(searchTerm.trim() || undefined);
      setSearchTerm(searchTerm.trim());
    }
  
    /** Update form fields */
    function handleChange(evt) {
      setSearchTerm(evt.target.value);
    }
  
    return (

        <div className="SearchForm mb-4">
        <form className="" onSubmit={handleSubmit}>
            <InputGroup>
                <Input 
                placeholder="Search Jobs" 
                className="form-control jobsearch"
                name="searchTerm"
                value={searchTerm}
                onChange={handleChange}/>
                <InputGroupAddon addonType="append"><Button type="submit" color="secondary">Search</Button></InputGroupAddon>
            </InputGroup>
          </form>
        </div>
    );
  }
  
  export default SearchForm;