-- Preserve existing names while allowing email-first signups.
alter table public.waitlist_entries
  alter column first_name drop not null,
  alter column last_name drop not null;
