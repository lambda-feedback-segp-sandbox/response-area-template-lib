export type AllowOverrides<
  Interface,
  OverridableKeys extends keyof Interface,
> = Omit<Interface, OverridableKeys> & Partial<Pick<Interface, OverridableKeys>>
