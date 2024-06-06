export type data = {
    id: string;
    age:number;
    name: string;
    gender: string;
    company: string;
    email:string;
    phone: string;
    address: string;
    friends: friend[];
}

 type friend ={
    id: number;
    name:string;
}

export interface PaginateProps {
    perPage: number;
    pageNumber: number;
    totalEntries: number;
    paginationHandler: (event: React.ChangeEvent<unknown>, value: number) => void;
    jumpPageHandler: (jumpTo: number) => void;
  }

export type listItem = {
    field: string;
    products: [];
    seller: [];
    status: string;
};

interface ShowOption {
    key: number;
    value: number;
}

export type listProps = {
    columns: object[];
    showOption: ShowOption[];
};

export type searchProps = {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    style?: React.CSSProperties
    handleSearch: ()=>void
  }