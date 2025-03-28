import { ProductType } from '@/types/ProductType';
import React, { FC } from 'react';

const Features: FC<{ singleProduct: any }> = ({ singleProduct }) => {

  return (
    <table className="max-w-[651px] w-full border-collapse">
      <tbody>
        {singleProduct?.configurations?.map((item: any) => (
          <tr key={item.id} className="border-b border-dashed border-[#545D6A]">
            <td className="py-2 px-4 font-medium text-[#545D6A]">{item?.variationOption?.variation.name}</td>
            <td className="py-2 px-4 text-[#545D6A]">{item?.variationOption?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Features;