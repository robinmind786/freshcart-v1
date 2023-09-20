import { Cell, Form, Span, Button, Img, Input } from "../material/Index";
import search from "../../assets/search.svg";

const Search = () => {
  return (
    <>
      <Form>
        <Cell className="input-group">
          <Input
            className="form-control rounded"
            type="search"
            placeholder="Search for products"
          />
          <Span className="input-group-append">
            <Button
              className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
              type="submit"
            >
              <Img src={search} alt="search" />
            </Button>
          </Span>
        </Cell>
      </Form>
    </>
  );
};

export default Search;
