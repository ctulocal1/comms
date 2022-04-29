// Map Maker Utility
// ======================
// Developed by Nathan Goldbaum in his spare time with Chicago Teachers Union
// use-cases in mind.
//
// Takes in csv data tables linked to schools or geographic boundaries 
// (e.g. Wards, CPS networks, Community Areas) and produces interactive
// maps, using a tagged SVG map of Chicago, data objects with general
// linking of school, areas and primary key IDs.
//
// The page will help to produce aggregate data through functions performed
// on sums of data columns from the CSV (e.g. sum of student subgroup divided
// by total student population). The user will then provide the number of
// steps (e.g. quartiles, quintiles) for shading the regions in comparison
// and produce an interactive map. Functionality will also be needed for
// mapping based on distinct categories, instead of ranges.
//
// It will be possible to produce a map with multiple data sets over one set
// of boundaries, or a map with one dataset displayed using multiple 
// boundary groupings. Possibly producing multiple datasets and multiple
// boundary groups in the same set is conceivable, but may be a later
// function and is generally not recommended.
//
//
// Initialize
//   Initialize maps list
//   Pull constant data
// 
// Add a new map to the list
//
//   Get data (upload, if initial)
//
//   Connect user data to schools/areas data
//
//   Choose boundary
//
//   Choose columns formula for point data
//
//   Choose columns formula for aggregate (area) data
//
//   Set ranges or categories
//   Ask for initial division (e.g. quartile, quintile)
//   Allow adjustment
//   
//   Set colors for ranges
//
//   Generate map
//   
//   Export Map(s)

