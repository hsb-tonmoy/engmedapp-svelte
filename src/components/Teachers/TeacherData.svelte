<script>
  export let teacher;
</script>

<table class="table-fixed">
  <tr>
    <td
      class="title title-first md:w-80 font-bold text-base lg:text-lg text-primary pb-6 lg:pb-8"
      >Experience</td
    >
    <td />
  </tr>
  {#if teacher.subjects_taught}
    <tr>
      <td>Subjects taught:</td>
      <td>{teacher.subjects_taught}</td>
    </tr>
  {/if}
  {#if teacher.years_of_experience}
    <tr>
      <td>Years of experience:</td>
      <td>{teacher.years_experience} Years</td>
    </tr>
  {/if}
  {#if teacher.students_taught}
    <tr>
      <td>Number of students taught:</td>
      <td>{teacher.students_taught}</td>
    </tr>
  {/if}
  {#if teacher.working_experience}
    <tr>
      <td>Working Experience:</td>
      <td>{teacher.working_experience}</td>
    </tr>
  {/if}
  <tr>
    <td
      class="title md:w-80 font-bold text-base lg:text-lg text-primary pb-6 lg:pb-8"
      >Education</td
    >
    <td />
  </tr>
  {#if teacher.qualification}
    <tr>
      <td>Qualification:</td>
      <td>{teacher.qualification}</td>
    </tr>
  {/if}
  {#if teacher.highest_degree}
    <tr>
      <td>Highest degree:</td>
      <td>{teacher.highest_degree}</td>
    </tr>
  {/if}
  <tr>
    <td
      class="title md:w-80 font-bold text-base lg:text-lg text-primary pb-6 lg:pb-8"
      >Tuition</td
    >
    <td />
  </tr>
  {#if teacher.preferred_language}
    <tr>
      <td>Preferred language:</td>
      <td>{teacher.preferred_language}</td>
    </tr>
  {/if}
  {#if teacher.preferred_mode_of_teaching}
    <tr>
      <td>Prefrred mode of teaching:</td>
      <td>{teacher.preferred_mode_of_teaching}</td>
    </tr>
  {/if}
  {#if teacher.expected_salary}
    <tr>
      <td>Expected salary:</td>
      <td
        >${teacher.expected_salary} / {teacher.preferred_mode_of_payment.toLowerCase()}</td
      >
    </tr>
  {/if}
  {#if teacher.hour_of_operation}
    <tr>
      <td>Hour of operation:</td>
      <td>{teacher.hour_of_operation} hours per week</td>
    </tr>
  {/if}
  {#if teacher.special_note}
    <tr>
      <td>Special notes for prospective students:</td>
      <td>{teacher.special_note}</td>
    </tr>
  {/if}
</table>

<style lang="postcss">
  td:not(.title) {
    @apply pb-6;
  }

  .title {
    padding-top: 3.75rem;
  }

  .title-first {
    padding-top: 0;
  }

  td {
    vertical-align: baseline;
  }
</style>
