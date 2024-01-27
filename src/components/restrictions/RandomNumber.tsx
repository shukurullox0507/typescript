import React from 'react'

type RandomNumberType = {
    value: number
}

type PositiveType = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?:never;
}

type NegativeType = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?:never;
}

type ZeroType = RandomNumberType & {
    isZero: boolean;
    isNegative?: never;
    isPositive?: never;
}

type RandomNumberProps = PositiveType | NegativeType | ZeroType
export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && '0'}
    </div>
  )
}
