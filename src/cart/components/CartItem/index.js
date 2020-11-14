import { useState } from 'react';
import Checkbox from '@sandika_components/commons/Form/Checkbox';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import * as theme from './cartitem.module.scss';

const CartItem = ({ item, index }) => {
  const [checked, setChecked] = useState(false);
  const styles = {
    cart__item: theme['cart__item'],
    cart__item_checklist: theme['cart__item--checklist'],
    cart__item_info: theme['cart__item--info'],
    cart__item_detail: theme['cart__item--detail'],
    cart__item_detail_image: theme['cart__item--detail-image'],
    cart__item_detail_body: theme['cart__item--detail-body'],
    cart__item_additional: theme['cart__item--additional'],
    cart__item_qty: theme['cart__item--qty'],
    qty__minus: theme['qty__minus'],
    qty__plus: theme['qty__plus']
  };

  const [qty, setQty] = useState(1);
  const handlePlus = () => {
    setQty(qty + 1);
  };
  const handleMinus = () => {
    if (qty > 1) { setQty(qty - 1); }
  };

  return (
    <>
      <div className={styles.cart__item}>
        <div className={styles.cart__item_checklist}>
          <Checkbox
            name={`${'item-' + index}`}
            id={`${'item-' + index}`}
            checked={checked}
            value={JSON.stringify(item)}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </div>
        <div className={styles.cart__item_info}>
          <Media style={styles.cart__item_detail}>
            <MediaImage style={styles.cart__item_detail_image}>
              <img src={item.image} />
            </MediaImage>
            <MediaBody style={styles.cart__item_detail_body}>
              <p>{item.title}</p>
              <strong>{item.price}</strong>
              <div className={styles.cart__item_additional}>
                <div className={styles.cart__item_qty}>
                  <div
                    className={styles.qty__minus}
                    onClick={() => {
                      handleMinus();
                    }}>
                    -
                  </div>
                  <input
                    placeholder={qty}
                    readOnly
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  />
                  <div
                    className={styles.qty__plus}
                    onClick={() => {
                      handlePlus();
                    }}>
                    +
                  </div>
                </div>
                {/* <div className={styles.cart__item_note}>Note</div> */}
              </div>
            </MediaBody>
          </Media>
        </div>
      </div>
    </>
  );
};

export default CartItem;
