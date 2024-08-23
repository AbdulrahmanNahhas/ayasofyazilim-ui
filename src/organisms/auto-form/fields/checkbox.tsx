import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormItem } from '@/components/ui/form';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';
import AutoFormLabel from '../common/label';

export default function AutoFormCheckbox({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const params = {
    containerClassName: undefined,
    ...fieldProps,
  };
  return (
    <>
      <FormItem className={fieldProps.containerClassName}>
        <div className="mb-3 flex items-center gap-3">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...params}
            />
          </FormControl>
          <AutoFormLabel label={label} isRequired={isRequired} />
        </div>
      </FormItem>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
    </>
  );
}
