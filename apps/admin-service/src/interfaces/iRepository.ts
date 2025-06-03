export interface IRepository {
    addFAQ(questions: any): Promise<Object>;
    getFAQ(): Promise<any>;
    addCategories(categories: any): Promise<Object>;
    getCategories(): Promise<any>;
}