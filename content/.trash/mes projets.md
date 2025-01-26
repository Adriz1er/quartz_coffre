---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 0
    isHidden: false
    sortIndex: -1
    width: -26
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __tasks__:
    key: __tasks__
    id: __tasks__
    input: task
    label: Task
    accessorKey: __tasks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    position: 0
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    width: 304
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  échéance:
    input: calendar
    accessorKey: échéance
    key: échéance
    id: échéance
    label: échéance
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  priorité:
    input: number
    accessorKey: priorité
    key: priorité
    id: priorité
    label: priorité
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  énergie:
    input: number
    accessorKey: énergie
    key: énergie
    id: énergie
    label: énergie
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tag:
    input: tags
    accessorKey: tag
    key: tag
    id: tag
    label: tag
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "projet", value: "projet", color: "hsl(152, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: true
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: query
  source_form_result: "from \"\" and -\"Modèles (inclus)/modèle templater pour boîte de réception\" and -\"roadmap\" and -\"Modèles (inclus)/modèle pour module principal\" where contains(tag, \"projet\") sort choice(date(échéance) != null, date(échéance), choice(priorité != null, priorité, choice(énergie != null, énergie, 4)))"
  source_destination_path: les dossiers onedrive/OneDrive/second_cerveau/mes notes/pris dans la boite de réception
  row_templates_folder: Modèles (inclus)/modèle pour module principal
  current_row_template: Modèles (inclus)/modèle pour module principal/modèle templater pour boîte de réception 1.md
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: true
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```