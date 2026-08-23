alter table public.waitlist_entries
  add column resend_synced_at timestamptz,
  add column resend_sync_error text check (
    resend_sync_error is null
    or char_length(resend_sync_error) <= 1000
  );

create index waitlist_entries_pending_resend_sync_idx
  on public.waitlist_entries (confirmed_at)
  where status = 'subscribed' and resend_synced_at is null;
