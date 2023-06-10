export interface GoodsListInterface {
    id: number,
    title: string,
    introduce: string,
}

interface GoodsListFormInterface {
    title: string,
    introduce: string,
    page: number,
    count: number, // 总条数
    pageSize: number,
}

export class GoodsInitData {
    selectData: GoodsListFormInterface = {
        title: "",
        introduce: "",
        page: 1,
        count: 0, // 总条数
        pageSize: 10,
    };
    list: GoodsListInterface[] = [];
    listForShow: GoodsListInterface[] = [];
}

