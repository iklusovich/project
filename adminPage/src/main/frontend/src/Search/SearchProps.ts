export interface SearchProps {
    placeholder: string
    allowClear: boolean
    onSearch: (value: string) => void
}