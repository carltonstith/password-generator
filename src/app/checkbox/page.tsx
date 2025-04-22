interface CheckboxProps {
  isChecked: boolean;
  label: string;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox = ({ isChecked, label, checkHandler }: CheckboxProps) => {
  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        &nbsp;
        <label htmlFor="checkbox">{label}</label>
      </form>
    </div>
  );
};